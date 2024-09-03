"use client";

import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  addItem,
  deleteItem,
  setItems,
  updateItem,
} from "@/redux/features/itemSlice";
import {
  CREATE_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  UPDATE_ITEM,
} from "@/lib/queries";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

type item = {
  id: string;
  name: string;
};

function ItemsPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.items.items);
  const { data, loading, error, refetch } = useQuery(GET_ITEMS, {
    onCompleted: (data) => {
      dispatch(setItems(data.items));
    },
  });
  const [createItemMutation] = useMutation(CREATE_ITEM);
  const [updateItemMutation] = useMutation(UPDATE_ITEM);
  const [deleteItemMutation] = useMutation(DELETE_ITEM);

  const [newItemName, setNewItemName] = useState("");
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [editItemName, setEditItemName] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleCreateItem = async () => {
    const { data } = await createItemMutation({
      variables: { name: newItemName },
    });
    dispatch(addItem(data.createItem));
    setNewItemName("");
  };

  const handleUpdateItem = async () => {
    const { data } = await updateItemMutation({
      variables: { id: editItemId, name: editItemName },
    });
    dispatch(updateItem(data.updateItem));
    setEditItemId(null);
    setEditItemName("");
  };

  const handleDeleteItem = async (id: string) => {
    await deleteItemMutation({ variables: { id } });
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h1>Loans</h1>
      <input
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="New item name"
      />
      <button onClick={handleCreateItem}>Add Item</button>

      <ul>
        {items.map((item: item) => (
          <li key={item.id}>
            {editItemId === item.id ? (
              <>
                <input
                  value={editItemName}
                  onChange={(e) => setEditItemName(e.target.value)}
                />
                <button onClick={handleUpdateItem}>Update</button>
                <button onClick={() => setEditItemId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {item.name}
                <button
                  onClick={() => {
                    setEditItemId(item.id);
                    setEditItemName(item.name);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteItem(item.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsPage;
