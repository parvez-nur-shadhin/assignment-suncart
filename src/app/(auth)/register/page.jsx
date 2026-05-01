const RegisterPage = () => {
  return (
    <div>
      <form>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Page title</legend>
          <input type="text" className="input" placeholder="My awesome page" />
          <p className="label">
            You can edit page title later on from settings
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
