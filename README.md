# React Fetch CRUD Lab

const getData = async () => {
      const response = await fetch('');
      const data = await response.json();
      return data;
    }
    const loadQuestions = async () => {
      const data = await getData();
      setQuestions({
        loading: false,
        questionData: data,
      })
    }
    loadQuestions();
  }, []);
