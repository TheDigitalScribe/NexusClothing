import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { IoSearch } from "react-icons/io5";

export const MobileSearchBarDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <IoSearch className="w-6 h-6" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Nexus Clothing</DialogTitle>
          <DialogDescription className="pt-2">
            Search for various categories and products
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center mt-4">
          <SearchBar />
        </div>
      </DialogContent>
    </Dialog>
  );
}


