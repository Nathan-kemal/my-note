import React from "react";

const Notes = ({ message }) => {
  return <div>Notes {message}</div>;
};

export default Notes;
export async function getServerSideProps(context) {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  };
}
