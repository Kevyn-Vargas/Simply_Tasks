import React from "react";

function useLocalStorage(itemName, initialValue, nameKey = "", nameInitialValue = "") {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [name, setName] = React.useState(nameInitialValue);
  const [isNameLoading, setIsNameLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        const localStorageName = localStorage.getItem(nameKey);
        const parsedName = localStorageName || nameInitialValue;

        setItem(parsedItem);
        setName(parsedName);
        setLoading(false);
        setIsNameLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itemName, initialValue, nameKey, nameInitialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const saveName = (newName) => {
    localStorage.setItem(nameKey, newName);
    setName(newName);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    name,
    saveName,
    isNameLoading,
  };
}

export default useLocalStorage;
