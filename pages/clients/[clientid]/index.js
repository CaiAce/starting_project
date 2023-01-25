import { useRouter } from "next/router";

function ClientProjects() {
  const router = useRouter();

  function loadProjectHandler() {
    //Load data...
    router.push('/clients/cai/projecta');
    // router.push({pathname: '/clients/[id]/[projectid]', query: {id: 'cai', projectid: 'projecta'}});
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjects;
