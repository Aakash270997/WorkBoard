"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";

export default function CreateTaskButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) return;

    console.log("New task:", title);

    setTitle("");
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        + Create Task
      </Button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create New Task"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Task Title"
            name="title"
            placeholder="Enter task title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={!title.trim()}>
              Create Task
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}