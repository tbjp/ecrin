"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Card, Title } from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/Table";

type Issue = {
  name: string;
  date: string;
};

type IssuesSectionProps = {
  initialIssues: Issue[];
};

export function IssuesSection({ initialIssues }: IssuesSectionProps) {
  const [issues, setIssues] = useState(initialIssues);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newIssue, setNewIssue] = useState("");
  const [newIssueDate, setNewIssueDate] = useState("");

  const handleAddIssue = () => {
    if (newIssue.trim()) {
      setIssues((prev) => [
        ...prev,
        { name: newIssue, date: newIssueDate || "-" },
      ]);
      setNewIssue("");
      setNewIssueDate("");
      setIsModalOpen(false);
    }
  };

  const handleResolveIssue = (index: number) => {
    setIssues((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="md:col-span-1">
      <div className="flex items-center justify-between">
        <Title>Issues</Title>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
        >
          Add Issue
        </button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Issue</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issues.map((issueObj, index) => (
            <TableRow key={index}>
              <TableCell>{issueObj.name}</TableCell>
              <TableCell>{issueObj.date}</TableCell>
              <TableCell>
                <button
                  onClick={() => handleResolveIssue(index)}
                  className="text-ecrinNavy text-sm hover:underline"
                >
                  Resolve Issue
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal for Adding an Issue */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 flex items-center justify-center"
          onClose={() => setIsModalOpen(false)}
        >
          <div className="fixed inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-20"
              leave="ease-in duration-200"
              leaveFrom="opacity-20"
              leaveTo="opacity-0"
            >
              <div className="absolute inset-0 bg-black opacity-20" />
            </Transition.Child>
          </div>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Add Issue
              </Dialog.Title>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Issue name"
                  value={newIssue}
                  onChange={(e) => setNewIssue(e.target.value)}
                  className="w-full border rounded px-2 py-1 mb-2"
                />
                <input
                  type="date"
                  value={newIssueDate}
                  onChange={(e) => setNewIssueDate(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-3 py-1 bg-gray-300 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded"
                  onClick={handleAddIssue}
                >
                  Add
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </Card>
  );
}
