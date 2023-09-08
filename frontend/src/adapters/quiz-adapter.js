import { fetchHandler, getPatchOptions, getPostOptions } from "../utils";

const baseUrl = '/api/quiz-attempts';

export const updateQuizAttempt = async ({ user_id, quiz_id, percentage, score_count }) => {
  const updateUrl = `${baseUrl}/update`; // Update your endpoint path as needed

  const updateData = {
    user_id,
    quiz_id,
    percentage,
    score_count,
  };

  const response = await fetchHandler(updateUrl, getPatchOptions(updateData));

  if (!response) {
    throw new Error('Failed to update quiz attempt');
  }

  return response;
};


export const createQuizAttempt = async ({ quiz_id, percentage, score_count }) => (
    fetchHandler(baseUrl, getPostOptions({ quiz_id, percentage, score_count }))
);

export const getAverageQuizScore = async () => (
    fetchHandler(`${baseUrl}/average`)
);