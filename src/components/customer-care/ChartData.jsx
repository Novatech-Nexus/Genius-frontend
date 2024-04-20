export const prepareBarChartData = (feedbackData) => {
    // Extract ratings for each section
    const diningExperienceRatings = feedbackData.map(feedback => feedback.diningExperience);
    const foodQualityRatings = feedbackData.map(feedback => feedback.foodQuality);
    const serviceRatings = feedbackData.map(feedback => feedback.service);
    const priceRatings = feedbackData.map(feedback => feedback.price);
  
    // Calculate average ratings for each section
    const avgDiningExperience = calculateAverageRating(diningExperienceRatings);
    const avgFoodQuality = calculateAverageRating(foodQualityRatings);
    const avgService = calculateAverageRating(serviceRatings);
    const avgPrice = calculateAverageRating(priceRatings);
  
    // Labels for x-axis
    const labels = ['Dining Experience', 'Food Quality', 'Service', 'Price and Value'];
  
    // Data for y-axis (average ratings)
    const data = [avgDiningExperience, avgFoodQuality, avgService, avgPrice];
  
    return {
        labels: labels,
        datasets: [
            {
                label: 'Average Ratings',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                data: data,
            },
        ],
    };
  };
  
  // Function to calculate average rating
  const calculateAverageRating = (ratings) => {
    const sum = ratings.reduce((total, rating) => total + getRatingValue(rating), 0);
    const average = sum / ratings.length;
    return average.toFixed(2); // Rounded to 2 decimal places
  };
  
  // Function to convert rating text to numeric value
  const getRatingValue = (ratingText) => {
    if (!ratingText) return 0; // Handle undefined or null ratings
    switch (ratingText.toLowerCase()) {
        case 'excellent':
            return 5;
        case 'very good':
            return 4;
        case 'good':
            return 3;
        case 'fair':
            return 2;
        case 'poor':
            return 1;
        default:
            return 0; // Handle unknown ratings
    }
  };
  
  
  
  
  
  // Function to calculate average of an array
  const calculateAverage = arr => arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  
  // Prepare data for pie chart
  export const preparePieChartData = feedbackData => {
      const averageRatings = {
          restaurant: calculateAverage(feedbackData.map(feedback => feedback.rating)),
          menuSelection: calculateAverage(feedbackData.map(feedback => feedback.menuSelection)),
          onlineSelection: calculateAverage(feedbackData.map(feedback => feedback.onlineSelection)),
          cateringSelection: calculateAverage(feedbackData.map(feedback => feedback.cateringSelection)),
          responseSelection: calculateAverage(feedbackData.map(feedback => feedback.responseSelection))
      };
  
      return {
          labels: ['Restaurant Rating', 'Menu Selection Rating', 'Online Selection Rating', 'Catering Selection Rating', 'Response Selection Rating'],
          datasets: [{
              label: 'Average Ratings',
              data: Object.values(averageRatings),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
          }]
      };
  };