"use client";

import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType: string;
  createdAt: string;
};

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  // Date range filters
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/lead");
        if (!res.ok) throw new Error("Failed to fetch leads");
        const data = await res.json();
        setLeads(data);
      } catch (err) {
        toast.error("Error loading leads");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  // Derived filtered leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filterType === "all" || lead.projectType === filterType;

      const createdAt = new Date(lead.createdAt);
      const matchesDate =
        (!startDate || createdAt >= new Date(startDate)) &&
        (!endDate || createdAt <= new Date(endDate));

      return matchesSearch && matchesFilter && matchesDate;
    });
  }, [leads, search, filterType, startDate, endDate]);

  // Export filtered leads to Excel
  const exportToExcel = () => {
    if (filteredLeads.length === 0) {
      toast.error("No leads to export");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(
      filteredLeads.map((lead) => ({
        Name: lead.name,
        Email: lead.email,
        Phone: lead.phone,
        ProjectType: lead.projectType,
        Message: lead.message,
        Date: new Date(lead.createdAt).toLocaleDateString(),
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "leads.xlsx");
    toast.success("Excel file downloaded!");
  };

  return (
    <Card className="m-2 shadow-lg">
      <CardHeader>
        <CardTitle>Leads Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          {/* Search */}
          <Input
            placeholder="Search by name, email, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/4"
          />

          {/* Project type */}
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-56">
              <SelectValue placeholder="Filter by project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Project Types</SelectItem>
              <SelectItem value="residential">Residential Design</SelectItem>
              <SelectItem value="commercial">Commercial Design</SelectItem>
              <SelectItem value="renovation">Renovation</SelectItem>
              <SelectItem value="styling">Interior Styling</SelectItem>
              <SelectItem value="consultation">Design Consultation</SelectItem>
            </SelectContent>
          </Select>

          {/* Date range */}
          <div className="flex gap-2">
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full md:w-40"
            />
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full md:w-40"
            />
          </div>

          {/* Export button */}
          <Button
            onClick={exportToExcel}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Export Excel
          </Button>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-muted-foreground">Loading leads...</p>
        ) : filteredLeads.length === 0 ? (
          <p className="text-muted-foreground">No leads found</p>
        ) : (
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Project Type</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.phone}</TableCell>
                    <TableCell>{lead.projectType}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {lead.message}
                    </TableCell>
                    <TableCell>
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
