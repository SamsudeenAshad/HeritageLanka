// Simple in-memory storage for emails (in production, use a real database)
let subscribers: string[] = [];
let feedbacks: Array<{
    name: string;
    email: string;
    rating: number;
    comment: string;
    date: string;
}> = [
    {
        name: "Samsudeen Ashad",
        email: "samsudeen@email.com",
        rating: 5,
        comment: "Heritage Lanka made planning my Sri Lankan adventure so easy! Everything was perfectly organized in one place. The interactive map feature is incredible!",
        date: "2024-11-10"
    },
    {
        name: "Kavindu Shehan",
        email: "kavindu@email.com",
        rating: 5,
        comment: "Finally, a platform that consolidates everything! No more juggling between multiple apps. The local guide connections were authentic and helpful.",
        date: "2024-11-08"
    },
    {
        name: "Thiramithu Kulasuriya",
        email: "thiramithu@email.com",
        rating: 4,
        comment: "As a solo traveler, I felt safe and well-guided throughout my journey. The real-time navigation and cultural insights were invaluable.",
        date: "2024-11-05"
    },
    {
        name: "Isara Madunika",
        email: "isara@email.com",
        rating: 5,
        comment: "A fantastic resource for exploring Sri Lanka — well-curated itineraries and excellent local tips. Highly recommend!",
        date: "2024-11-12"
    }
];

export function addSubscriber(email: string): { success: boolean; message: string; count: number } {
  if (!email || !email.includes('@')) {
    return { success: false, message: 'Invalid email address', count: subscribers.length };
  }
  
  if (subscribers.includes(email)) {
    return { success: false, message: 'Email already subscribed', count: subscribers.length };
  }
  
  subscribers.push(email);
  return { success: true, message: 'Successfully subscribed!', count: subscribers.length };
}

export function getSubscriberCount(): number {
  return subscribers.length + 1247; // Add base count for display
}

export function addFeedback(feedback: {
  name: string;
  email: string;
  rating: number;
  comment: string;
}): { success: boolean; message: string } {
  if (!feedback.name || !feedback.email || !feedback.rating || !feedback.comment) {
    return { success: false, message: 'All fields are required' };
  }
  
  feedbacks.push({
    ...feedback,
    date: new Date().toISOString().split('T')[0]
  });
  
  return { success: true, message: 'Thank you for your feedback!' };
}

export function getFeedbacks() {
  return feedbacks;
}
