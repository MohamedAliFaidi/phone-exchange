import {  useEffect, useState } from "react";
import Modal from "~/components/Modal";

const VerifyRequest = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default VerifyRequest;
