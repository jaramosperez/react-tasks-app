import React, { Fragment, useState  } from 'react';

type FormElement = React.FormEvent<HTMLFontElement>

function App(): JSX.Element {

  const [newTask, setNewTask] = useState('');

const handleSubmit = (e: FormElement) => {
  e.preventDefault();
  console.log(newTask);

}

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewTask(e.target.value)}/>
        <button>
          Guardar
        </button>
      </form>
    </Fragment>
  );
}

export default App;
