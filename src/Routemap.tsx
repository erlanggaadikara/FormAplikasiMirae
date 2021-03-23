import { Router } from "@reach/router";
import { observer } from "mobx-react-lite";
import Landing from "Page/Landing";
import Form from "Page/Form";
import F1 from "Page/Form/F1";

export default observer(() => {
  return (
    <Router>
      <Landing path="/" />
      <Form path="/Form">
        <F1 path="/1" />
      </Form>
    </Router>
  );
});
