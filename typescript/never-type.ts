function fail(msg: string): never {
  throw new Error(msg);
}
try 
{
    fail("Something went wrong!");
}
catch (error) {
    console.log(error); // Output: Something went wrong!
}
