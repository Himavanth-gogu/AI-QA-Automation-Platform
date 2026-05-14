import axios from "axios";

const API = axios.create({

  baseURL:
    "http://127.0.0.1:8000",

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