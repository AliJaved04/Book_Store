<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-img :src="book.cover_image_url" height="400"></v-img>
          <v-card-title>{{ book.title }}</v-card-title>
          <v-card-subtitle>{{ book.description }}</v-card-subtitle>
          <v-card-text>{{ book.author }}</v-card-text>
        </v-card>

        <v-card>
          <v-card-title>Customer Reviews</v-card-title>
          <v-divider></v-divider>
          <v-list>
            <v-list-item v-for="(review, index) in book.reviews" :key="index">
              <v-list-item-title>{{ review.title }}</v-list-item-title>
              <v-list-item-subtitle
                >Rating: {{ review.rating }}/5</v-list-item-subtitle
              >
              <v-list-item-content>{{ review.comment }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>

        <!-- Related Books -->
        <v-card>
          <v-card-title>Related Books</v-card-title>
          <v-divider></v-divider>
          <v-row>
            <v-col
              v-for="relatedBook in book.relatedBooks"
              :key="relatedBook.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-img :src="relatedBook.coverImage" height="200"></v-img>
                <v-card-title>{{ relatedBook.title }}</v-card-title>
                <v-card-subtitle>{{ relatedBook.author }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="primary">View Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  beforeMount() {},
  data() {
    return {
      book: {
        title: "Book Title",
        author: "Author Name",
        description: "Description of the book goes here.",
        coverImage: "book-cover.jpg",
        reviews: [
          { title: "Great book!", rating: 5, comment: "I loved it!" },
          { title: "Good read", rating: 4, comment: "Enjoyable." },
        ],
        relatedBooks: [
          {
            id: 1,
            title: "Related Book 1",
            author: "Related Author 1",
            coverImage: "related-book1.jpg",
          },
          {
            id: 2,
            title: "Related Book 2",
            author: "Related Author 2",
            coverImage: "related-book2.jpg",
          },
        ],
      },
    };
  },
};
</script>
