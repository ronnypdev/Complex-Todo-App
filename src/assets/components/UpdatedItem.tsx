type UpdatedItem = {
  itemReveal: boolean;
  itemIndexValue: number
  itemValue: string;
  itemId: string;
  itemName: string;
  updateItemData: (itemIndex: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  // submitItemData: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function UpdatedItem({
  itemReveal,
  itemIndexValue,
  itemValue,
  itemId,
  itemName,
  updateItemData,
}: UpdatedItem) {
  return (
    <>
      {itemReveal ? <input className="p-[6px]"
        type="text"
        value={itemValue}
        id={itemId}
        name={itemName}
        onChange={(e) => updateItemData(itemIndexValue, e)}
      /> :
          <label className="cursor-pointer" htmlFor={itemId}>{itemValue}</label>}
    </>
  )
}
