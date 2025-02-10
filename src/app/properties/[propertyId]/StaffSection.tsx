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

type StaffSectionProps = {
  initialStaff: string[];
};

export function StaffSection({ initialStaff }: StaffSectionProps) {
  const [staffMembers, setStaffMembers] = useState(initialStaff);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStaffMember, setNewStaffMember] = useState("");

  const handleAddStaff = () => {
    if (newStaffMember.trim()) {
      setStaffMembers((prev) => [...prev, newStaffMember]);
      setNewStaffMember("");
      setIsModalOpen(false);
    }
  };

  return (
    <Card className="md:col-span-1">
      <div className="flex items-center justify-between">
        <Title>Staff Members</Title>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-ecrinNavy hover:bg-ecrinNavy/80 text-white font-bold py-1 px-2 rounded"
        >
          Add Staff
        </button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Staff Member</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staffMembers.map((staff, index) => (
            <TableRow key={index}>
              <TableCell>{staff}</TableCell>
              <TableCell>
                <a href="#" className="text-ecrinNavy text-sm hover:underline">
                  View Details
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal for Adding a Staff Member */}
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
                Add Staff Member
              </Dialog.Title>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Staff member name"
                  value={newStaffMember}
                  onChange={(e) => setNewStaffMember(e.target.value)}
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
                  className="px-3 py-1 bg-ecrinNavy text-white rounded"
                  onClick={handleAddStaff}
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
