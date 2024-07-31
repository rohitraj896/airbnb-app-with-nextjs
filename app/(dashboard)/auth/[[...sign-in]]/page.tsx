const SignInPage = ({ params }: { params: { "sign-in": string[] } }) => {
  console.log(params);
  console.log(params["sign-in"]);
  return <div>SignInPage : {params["sign-in"]}</div>;
};
export default SignInPage;
