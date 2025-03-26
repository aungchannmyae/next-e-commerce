import { toast } from "react-toastify";
import { create } from "zustand";


const getWishlistFromStorage = () => {
  if (typeof window !== "undefined") {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  }
  return [];
};

const useWishlistStore = create((set, get) => ({
  wishlist: getWishlistFromStorage(),

  addToWishlist: (product) => {
    if (get().wishlist.some((item) => item.id === product.id))
      return toast.error("Product Already In Wishlist");
    const updatedWishlist = [...get().wishlist, product];
    set({ wishlist: updatedWishlist });
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Persist in local storage
    toast.success("Product Added To Wishlist");
  },

  removeFromWishlist: (productId) => {
    const updatedWishlist = get().wishlist.filter((item) => item.id !== productId);
    set({ wishlist: updatedWishlist });
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Product Removed From Wishlist");
  },

  clearWishlist: () => {
    set({ wishlist: [] });
    localStorage.removeItem("wishlist");
  },

  buttonText: "Add to wishlist",
  setButtonText: (buttonText) => set({ buttonText }),
}));

export default useWishlistStore;
