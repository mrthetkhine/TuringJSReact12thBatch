let state :string = "pending";
state = "success";
state = "rejected";
// state = "done"; // Error: Type '"done"' is not assignable to type 'string | "pending" | "success" | "failed"'.

state = "done";

type State = "pending" | "success" | "rejected" ;
let state2 : State = "pending";
//state2 = "another";

type Success = "success";
type Rejected = "rejected";
type Pending = "pending";
type State2 = Success | Rejected | Pending ;