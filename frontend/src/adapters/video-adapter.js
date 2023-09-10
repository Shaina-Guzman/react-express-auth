import { fetchHandler, getPatchOptions } from "../utils";
const baseUrl = '/api/video';
export const getAllLessons = async () => {
  const [lesson, error] = await fetchHandler(baseUrl);
  console.log(error); // just logging errors here for simplicity
  return lesson || [];
};
export const getLesson = async (id) => fetchHandler(`${baseUrl} /${id}`);