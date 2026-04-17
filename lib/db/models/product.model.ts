import mongoose, { Document, Model, model, Schema, Types } from "mongoose"
import { IProductInput } from "@/types"

export interface IRatingDistribution {
  _id: false
  rating: number
  count: number
}

// Interface pour l'objet de données pur
export interface IProduct extends Omit<IProductInput, "reviews"> {
  _id: Types.ObjectId
  reviews: Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

export type IProductDocument = IProduct & Document
const productSchema = new Schema<IProductDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [String],
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    listPrice: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    tags: { type: [String], default: ["new arrival"] },
    colors: { type: [String], default: ["White", "Red", "Black"] },
    sizes: { type: [String], default: ["S", "M", "L"] },
    avgRating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    ratingDistribution: [
      {
        _id: false,
        rating: {
          type: Number,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
      },
    ],
    numSales: {
      type: Number,
      required: true,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Product =
  (mongoose.models.Product as Model<IProductDocument>) ||
  mongoose.model<IProductDocument>("Product", productSchema)

export default Product
