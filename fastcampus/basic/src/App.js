import FormManager from "./components/3-12.Render Props/FormManager";
import FormOne from "./components/3-12.Render Props/FormOne";
import FormTwo from "./components/3-12.Render Props/FormTwo";

function App() {
  const handleSubmitFormOne = (form) => {
    console.log("Submit Form One", form);
  };

  const handleSubmitFormTwo = (form) => {
    console.log("Submit Form Two", form);
  };

  return (
    <div className="App">
      <FormManager
        defaultForm={{ name: "", phone: "" }}
        onSubmit={handleSubmitFormOne}
        render={({ form, onSubmit, onChange }) => (
          <FormOne
            name={form.name}
            phone={form.phone}
            onSubmit={onSubmit}
            onChange={onChange}
          />
        )}
      />
      <FormManager
        defaultForm={{ username: "", password: "" }}
        onSubmit={handleSubmitFormTwo}
        render={({ form, onSubmit, onChange }) => (
          <FormTwo
            username={form.username}
            password={form.password}
            onSubmit={onSubmit}
            onChange={onChange}
          />
        )}
      >
        <FormTwo />
      </FormManager>
    </div>
  );
}

export default App;
