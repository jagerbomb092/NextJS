export async function getServerSideProps(context: any) {
  console.log(context);

  return {
    props: {}, // will be passed to the page component as props
  };
}
