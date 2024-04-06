const CreateTeamPage = () => {
  return (
    <div className="create-team">
      <div className="container">
        <h2 className="create-team__title">Создать команду</h2>

        <input
          className="create-team__input"
          placeholder="Введите название"
        ></input>
        <input
          className="create-team__input"
          placeholder="Имя участника"
        ></input>
        <button>Добавить участника</button>

        {/* fieldSet */}

        <button style={{display: 'block', marginTop: '50px'}}>Создать команду</button>
      </div>
    </div>
  );
};

export default CreateTeamPage;
