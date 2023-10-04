<template>
  <div>
    <v-data-table :headers="headers" :items="orderList" class="elevation-1">
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Update Order Status</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.user_id"
                      label="User ID"
                      readonly
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.id"
                      readonly
                      label="Order ID"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.status"
                      :items="[
                        'pending',
                        'processing',
                        'completed',
                        'canceled',
                      ]"
                      label="Status"
                      placeholder="Select Status"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      orderList: [],
      headers: [
        {
          title: "Order Id",

          key: "id",
        },
        { title: "UserID", key: "user_id" },
        { title: "Order Status", key: "status" },
        { title: "Actions", key: "actions", sortable: false },
      ],
      dialog: false,

      editedItem: {},
    };
  },
  methods: {
    ...mapActions("cart", ["showAllOrders"]),
    ...mapActions("cart", ["updateOrderStatus"]),
    ...mapActions("cart", ["deleteOrder"]),

    close() {
      this.dialog = false;
    },
    async save() {
      const res = await this.updateOrderStatus(this.editedItem);
      if (res) {
        console.log("Order Updated");
      }
      this.dialog = false;
    },

    editItem(item) {
      this.editedItem = item;
      this.dialog = true;
    },

    reviewHandler(id, name) {
      this.$router.push({
        name: "ReviewComponent",
        params: { order_id: id, productName: name },
      });
    },
  },
  async beforeMount() {
    const res = await this.showAllOrders();
    this.orderList = res;
  },
};
</script>

<style>
.card {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  min-width: 300px;
  height: 150px;
}
</style>
