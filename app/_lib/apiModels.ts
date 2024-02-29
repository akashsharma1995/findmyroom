export interface ListingModel {
  id: number;
  title: string;
  about: string;
  spaceDescription: string;
  thumbnailUrl: string;
  overallRating: number;
  imageUrls: string[];
  amenities: string[];
  location: LocationModel;
  ratings: RatingsModel;
  reviews: ReviewModel[];
  host: HostModel;
  pricePerNightInCents: number;
  cleaningPricePerNightInCents: number;
  servicePricePerNightInCents: number;
  maxGuests: number;
  numberOfBedrooms: number;
  numberOfBeds: number;
  numberOfBathroom: number;
}

export interface HostModel {
  name: string;
  profileUrl: string;
  bio: string;
  joinedAt: Date;
  totalReviews: number;
  isVerified: boolean;
  isSuperHost: boolean;
}

export interface LocationModel {
  street: string;
  state: string;
  country: string;
}

export interface RatingsModel {
  cleanliness: number;
  accuracy: number;
  value: number;
  location: number;
  service: number;
}

export interface ReviewModel {
  reviewerName: string;
  profileUrl: string;
  review: string;
  createdAt: Date;
}
