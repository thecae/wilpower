"use server"

import { randomUUID } from "crypto"
import { Client } from "square"

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
})

export async function submitPayment(sourceId) {
  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: "USD",
        amount: 100,
      },
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
