import React, { useState } from "react";
import {
  ChevronDown,
  ListFilter,
  ArrowUpDown,
  Upload,
  Download,
  Share2,
  Plus,
  Search,
  Bell,
  EyeOff,
  MoreHorizontal,
  Link2,
  ChevronsRight,
  RotateCcwSquare,
  RefreshCcw,
  CornerRightDown,
  Briefcase,
  CalendarDays,
  CircleChevronDown,
  CircleUserRound,
  Globe,
  Hand,
} from "lucide-react";
import shape from "../assets/Shape.png";
import user from "../assets/profile.png";

interface JobRequest {
  id: number;
  jobRequest: string;
  submitted: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  estValue: number;
}

const SpreadsheetTable: React.FC = () => {
  const [data] = useState<JobRequest[]>([
    {
      id: 1,
      jobRequest: "Launch social media campaign for pro...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel...",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: 6200000,
    },
    {
      id: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanp...",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: 3500000,
    },
    {
      id: 3,
      jobRequest: "Finalize user testing feedback for app...",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohns...",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: 4750000,
    },
    {
      id: 4,
      jobRequest: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen...",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: 5900000,
    },
    {
      id: 5,
      jobRequest: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabro...",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: 2800000,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In-process":
        return "bg-yellow-100 text-yellow-800";
      case "Need to start":
        return "bg-blue-100 text-blue-800";
      case "Complete":
        return "bg-green-100 text-green-800";
      case "Blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 font-medium";
      case "Medium":
        return "text-yellow-600 font-medium";
      case "Low":
        return "text-blue-600 font-medium";
      default:
        return "text-gray-600";
    }
  };

  const formatCurrency = (value: number) => {
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value) + " ₹"
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="border-b bg-gray-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img className="pr-3" src={shape} alt="Workspace" />
          <span className="text-gray-400 text-sm font-semibold">Workspace</span>
          <span className="text-gray-400 font-semibold">›</span>
          <span className="text-gray-400 text-sm font-semibold">Folder 2</span>
          <span className="text-gray-400 font-semibold">›</span>
          <span className="font-medium text-gray-900">Spreadsheet 3</span>
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative ">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-10 pr-4 py-2  bg-gray-100  rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-[#4b6a4f] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img className="w-8 h-8" src={user} alt="User" />
            <div className="text-sm">
              <div className="font-semibold text-gray-500 leading-3">
                John Doe
              </div>
              <div className="text-gray-400 text-[12px]">john.doe...</div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="border-b bg-gray-50 px-4 py-2 flex items-center justify-between">
        <div className="flex  items-center space-x-4 font-medium text-xl">
          <button className="flex items-center space-x-1 border-r pr-5 text-gray-600 hover:text-gray-900">
            <span className="text-sm">Tool bar</span>
            <ChevronsRight className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <EyeOff className="w-4 h-4" />
            <span className="text-sm">Hide fields</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <ArrowUpDown className="w-4 h-4" />
            <span className="text-sm">Sort</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <ListFilter className="w-4 h-4" />
            <span className="text-sm">Filter</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <RotateCcwSquare className="w-4 h-4" />
            <span className="text-sm">Cell view</span>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Import</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
            <Upload className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 bg-[#4b6a4f] text-white rounded text-sm hover:bg-green-700">
            <Plus className="w-4 h-4" />
            <span>New Action</span>
          </button>
        </div>
      </div>

      {/* Action Tabs */}
      <div className="border-b bg-gray-50  grid grid-cols-[60px_1fr_1fr_1fr_1fr_120px_1fr_1fr_1fr_140px_150px] ">
        <div className="blank w-3"></div>
        <div className="secondary_tab flex items-center bg-gray-300 text-blue-800 px-3 py-1  text-sm col-span-4">
          <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-md">
            <Link2 className="w-4 h-4" />
            <span className="text-gray-500">Q3 Financial Overview</span>
          </div>
          <RefreshCcw className="w-4 h-4 ml-2 text-red-400 rotate-[90deg]" />
        </div>
        <div className="blank_2"></div>
        <div className="bg-[#889c8a] text-[#8b928c] px-3 py-1  text-sm flex items-center gap-1 justify-center">
          <CornerRightDown className="w-4 h-4 text-white" />
          <span className="text-green-800">ABC</span>
          <MoreHorizontal className="w-4 h-4 inline ml-1 text-green-800" />
        </div>
        <div className="ans_ques bg-[#beafe3] text-purple-800 px-3 py-1  text-sm flex items-center gap-1 justify-center col-span-2">
          <CornerRightDown className="w-4 h-4 text-white font-semibold" />
          Answer a question
          <MoreHorizontal className="w-4 h-4 inline ml-1" />
        </div>
        <div className="Extract bg-[#fac2af] text-orange-800 px-3 py-1  text-sm flex items-center justify-center gap-1">
          <CornerRightDown className="w-4 h-4 text-white font-semibold" />
          Extract
          <MoreHorizontal className="w-4 h-4 inline ml-1" />
        </div>
        <button className="plus w-full h-full border-r-2 border-l-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-200">
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-fixed">
          <colgroup>
            <col style={{ width: "60px" }} />
            <col />
            <col />
            <col />
            <col />
            <col style={{ width: "120px" }} />
            <col />
            <col />
            <col />
            <col style={{ width: "140px" }} />
            <col style={{ width: "150px" }} />
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              <th className="w-14 px-2 py-3 text-lg text-center font-medium text-gray-400 bg-gray-200 uppercase tracking-wider border-r border-gray-200">
                #
              </th>

              <th className="px-4 py-3 text-left text-xs  text-gray-500 font-bold uppercase tracking-wider border-r border-gray-200 bg-gray-200">
                <div className="flex items-center space-x-1">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span>Job Request</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 bg-gray-200">
                <div className="flex items-center space-x-1">
                  <CalendarDays className="w-4 h-4 text-lg text-gray-400" />
                  <span className="text-gray-500">Submitted</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 bg-gray-200">
                <div className="flex items-center space-x-1">
                  <CircleChevronDown className="w-4 h-4 text-lg text-gray-400" />
                  <span>Status</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 bg-gray-200">
                <div className="flex items-center space-x-1">
                  <CircleUserRound className="w-4 h-4 text-lg text-gray-400" />
                  <span>Submitter</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>

              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 bg-gray-200">
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4 text-lg text-gray-400" />
                  <span>URL</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#636962] bg-[#d7dbd7]  uppercase tracking-wider border-r border-gray-200 ">
                <div className="flex items-center space-x-1">
                  <Hand className="w-4 h-4" />
                  <span>Assigned</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#7028a8] uppercase tracking-wider border-r border-gray-200 bg-[#eae3fc]">
                Priority
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#7028a8] uppercase tracking-wider border-r border-gray-200 bg-[#eae3fc]">
                Due Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#a17f76] uppercase tracking-wider border-r border-gray-200 bg-[#ffe2d8]">
                Est. Value
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r-2 border-l-2 border-dashed border-gray-300"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="w-8 px-2 py-4 text-sm  text-center text-gray-500 border-r border-gray-200">
                  {row.id}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200 max-w-xs">
                  <div className="truncate ">{row.jobRequest}</div>
                </td>
                <td className="px-4 py-4 text-sm text-right text-gray-900 border-r border-gray-200 whitespace-nowrap">
                  {row.submitted}
                </td>
                <td className="px-4 py-4 text-sm border-r border-gray-200">
                  <span
                    className={`px-2 py-1 text-center rounded-full text-xs font-medium ${getStatusColor(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                  {row.submitter}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800 font-semibold truncate border-r border-gray-200">
                  <a href="#" className="underline ">
                    {row.url}
                  </a>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                  {row.assigned}
                </td>
                <td className="px-4 py-4 text-sm border-r text-center border-gray-200">
                  <span className={getPriorityColor(row.priority)}>
                    {row.priority}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-right text-gray-900 border-r border-gray-200 whitespace-nowrap">
                  {row.dueDate}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 border-r text-right border-gray-200 whitespace-nowrap">
                  {formatCurrency(row.estValue)}
                </td>
                <td className="px-4 py-4 border-r-2 border-l-2 border-dashed border-gray-300"></td>
              </tr>
            ))}
            {/* Empty rows */}
            {Array.from({ length: 10 }, (_, i) => (
              <tr key={`empty-${i}`} className="hover:bg-gray-50">
                <td className="w-8 px-2 py-4 text-sm text-gray-500 border-r border-gray-200">
                  {data.length + i + 1}
                </td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r border-gray-200"></td>
                <td className="px-4 py-4 border-r-2 border-l-2 border-dashed border-gray-300"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpreadsheetTable;
