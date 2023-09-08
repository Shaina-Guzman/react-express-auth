const Quiz_Questions = require('../models/quiz_questions');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    await Quiz_Questions.deleteAll(); // Assuming there's a method to delete all existing questions
    
    await Quiz_Questions.create(
      'What is 27 + 14?', 41, 39, 33, 23, 1
    );
  
    await Quiz_Questions.create(
      'What is 68 + 25?', 93, 83, 97, 72, 1
    );
  
    await Quiz_Questions.create(
      'What is 49 + 36?', 85, 65, 53, 91, 1
    );
  
    await Quiz_Questions.create(
      'What is 81 + 19?', 100, 72, 105, 88, 1
    );
  
    await Quiz_Questions.create(
      'What is 43 + 57?', 100, 69, 79, 90, 1
    );
  
    await Quiz_Questions.create(
      'What is 52 + 38?', 90, 80, 62, 110, 1
    );
  
    await Quiz_Questions.create(
      'What is 64 + 28?', 92, 72, 50, 102, 1
    );
  
    await Quiz_Questions.create(
      'What is 36 + 45?', 81, 91, 61, 51, 1
    );
  
    await Quiz_Questions.create(
      'What is 57 + 33?', 90, 70, 66, 50, 1
    );
  
    await Quiz_Questions.create(
      'What is 76 + 14?', 90, 82, 100, 88, 1
    );

    await Quiz_Questions.create(
        'What is 42 - 19?', 23, 25, 21, 17, 2
      );
    
      await Quiz_Questions.create(
        'What is 87 - 34?', 53, 42, 56, 45, 2
      );
    
      await Quiz_Questions.create(
        'What is 58 - 25?', 33, 27, 35, 30, 2
      );
    
      await Quiz_Questions.create(
        'What is 76 - 48?', 28, 30, 26, 35, 2
      );
    
      await Quiz_Questions.create(
        'What is 95 - 63?', 32, 30, 37, 28, 2
      );
    
      await Quiz_Questions.create(
        'What is 64 - 17?', 47, 38, 42, 50, 2
      );
    
      await Quiz_Questions.create(
        'What is 83 - 29?', 54, 56, 46, 61, 2
      );
    
      await Quiz_Questions.create(
        'What is 51 - 39?', 12, 14, 10, 9, 2
      );
    
      await Quiz_Questions.create(
        'What is 72 - 58?', 14, 16, 12, 8, 2
      );
    
      await Quiz_Questions.create(
        'What is 96 - 74?', 22, 18, 28, 20, 2
      );

      await Quiz_Questions.create(
        'What is 7 × 3?', 21, 24, 18, 14, 3
      );
    
      await Quiz_Questions.create(
        'What is 5 × 8?', 40, 45, 35, 30, 3
      );
    
      await Quiz_Questions.create(
        'What is 9 × 6?', 54, 49, 58, 63, 3
      );
    
      await Quiz_Questions.create(
        'What is 4 × 2?', 8, 10, 6, 12, 3
      );
    
      await Quiz_Questions.create(
        'What is 12 × 7?', 84, 72, 90, 96, 3
      );
    
      await Quiz_Questions.create(
        'What is 3 × 9?', 27, 24, 21, 30, 3
      );
    
      await Quiz_Questions.create(
        'What is 6 × 5?', 30, 36, 42, 25, 3
      );
    
      await Quiz_Questions.create(
        'What is 8 × 4?', 32, 36, 40, 28, 3
      );
    
      await Quiz_Questions.create(
        'What is 11 × 2?', 22, 24, 20, 18, 3
      );
    
      await Quiz_Questions.create(
        'What is 10 × 10?', 100, 110, 90, 120, 3
      );

      await Quiz_Questions.create(
        'What is 24 ÷ 3?', 8, 6, 10, 12, 4
      );
    
      await Quiz_Questions.create(
        'What is 56 ÷ 8?', 7, 6, 9, 10, 4
      );
    
      await Quiz_Questions.create(
        'What is 63 ÷ 9?', 7, 6, 8, 10, 4
      );
    
      await Quiz_Questions.create(
        'What is 45 ÷ 5?', 9, 10, 8, 7, 4
      );
    
      await Quiz_Questions.create(
        'What is 72 ÷ 6?', 12, 10, 9, 11, 4
      );
    
      await Quiz_Questions.create(
        'What is 81 ÷ 9?', 9, 8, 10, 11, 4
      );
    
      await Quiz_Questions.create(
        'What is 98 ÷ 7?', 14, 12, 13, 11, 4
      );
    
      await Quiz_Questions.create(
        'What is 36 ÷ 4?', 9, 7, 8, 10, 4
      );
    
      await Quiz_Questions.create(
        'What is 54 ÷ 6?', 9, 8, 10, 7, 4
      );
    
      await Quiz_Questions.create(
        'What is 64 ÷ 8?', 8, 7, 9, 10, 4
      );
  };
  
