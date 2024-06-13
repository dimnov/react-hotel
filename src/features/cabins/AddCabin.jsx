import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleAddCabin() {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  }

  return (
    <div>
      <Button onClick={handleAddCabin}>{isOpenModal ? "Close form" : "Add new cabin"}</Button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
