import axios from "axios";

const API = axios.create({

  baseURL:
    "https://ai-qa-automation-platform.onrender.com",

});

export const runAutomation =
  async (url: string) => {

    const response =
      await API.get(

        `/run-test?url=${url}`

      );

    return response.data;

  };

export const getHistory =
  async () => {

    const response =
      await API.get(

        "/history"

      );

    return response.data;

  };

export const generateTestCases =
  async (url: string) => {

    const response =
      await API.get(

        `/generate-testcases?url=${url}`

      );

    return response.data;

  };