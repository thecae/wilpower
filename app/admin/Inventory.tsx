"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Item } from "@/types/Item"
import { formatCurrency } from "@/lib/utils"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

const quantitySchema = z.object({
  XS: z.number().positive(),
  S: z.number().positive(),
  M: z.number().positive(),
  L: z.number().positive(),
  XL: z.number().positive(),
  "2XL": z.number().positive(),
})

const formSchema = z.object({
  name: z.string().min(2),
  price: z.number().positive(),
  desc: z.object({
    material: z.string(),
    fit: z.string(),
  }),
  quantity: quantitySchema,
})

const ItemForm = ({
  defaultForm,
  onSubmit,
}: {
  defaultForm: Item
  onSubmit: (values: z.infer<typeof formSchema>) => void
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultForm,
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Name</FormLabel>
                <FormControl>
                  <Input placeholder="Effort T-shirt" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="14.99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="desc.material"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Material</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc.fit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fit</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-6">
          <FormField
            control={form.control}
            name={`quantity.XS`}
            render={({ field }) => (
              <FormItem className="grid justify-center text-center">
                <FormLabel>XS</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-16"
                    placeholder="0"
                    {...field}
                    onChange={(value) =>
                      field.onChange(value.target.valueAsNumber)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`quantity.S`}
            render={({ field }) => (
              <FormItem className="grid justify-center text-center">
                <FormLabel>S</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-16"
                    placeholder="0"
                    {...field}
                    onChange={(value) =>
                      field.onChange(value.target.valueAsNumber)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`quantity.M`}
            render={({ field }) => (
              <FormItem className="grid justify-center text-center">
                <FormLabel>M</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-16"
                    placeholder="0"
                    {...field}
                    onChange={(value) =>
                      field.onChange(value.target.valueAsNumber)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`quantity.L`}
            render={({ field }) => (
              <FormItem className="grid justify-center text-center">
                <FormLabel>L</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-16"
                    placeholder="0"
                    {...field}
                    onChange={(value) =>
                      field.onChange(value.target.valueAsNumber)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`quantity.XL`}
            render={({ field }) => (
              <FormItem className="grid justify-center text-center">
                <FormLabel>XL</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-16"
                    placeholder="0"
                    {...field}
                    onChange={(value) =>
                      field.onChange(value.target.valueAsNumber)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`quantity.2XL`}
            render={({ field }) => (
              <FormItem className="grid justify-center text-center">
                <FormLabel>2XL</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-16"
                    placeholder="0"
                    {...field}
                    onChange={(value) =>
                      field.onChange(value.target.valueAsNumber)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

const TableItem = ({ item }: { item: Item }) => {
  return (
    <TableRow key={item.name}>
      <TableCell className="text-lg font-medium">{item.name}</TableCell>
      <TableCell>
        <div className="grid">
          <div className="flex gap-2">
            <p className="text-muted-foreground">Material:</p>
            <p>{item.desc.material}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-muted-foreground">Fit:</p>
            <p>{item.desc.fit}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="grid grid-cols-6 items-center">
          {Object.entries(item.quantity).map(([k, v]) => (
            <div className="grid text-center" key={k}>
              <p className="text-muted-foreground">{k}</p>
              <p>{v}</p>
            </div>
          ))}
        </div>
      </TableCell>
      <TableCell>{formatCurrency(item.price)}</TableCell>
      <TableCell>
        <div className="grid grid-cols-2 gap-2">
          <EditInventoryItem item={item} />
          <DeleteInventoryItem item={item} />
        </div>
      </TableCell>
    </TableRow>
  )
}

const AddInventoryItem = () => {
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<string>()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError("")
    setSuccess("")

    const res = await fetch("/api/store", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (!res.ok) setError(await res.text())
    else setSuccess(await res.text())
  }

  const emptyValues: Item = {
    _id: "",
    name: "",
    inv: "",
    price: 0.0,
    desc: {
      material: "",
      fit: "",
    },
    quantity: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      "2XL": 0,
    },
    images: [],
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="italic text-muted-foreground">
          Click Here to Add New Inventory Items.
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Inventory Item</DialogTitle>
          <DialogDescription>
            Write the Quote and Author for this Testimonial. Click Submit to
            save changes. <strong>Do not put quotation marks.</strong>
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {error}
            </AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <CheckCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {success}
            </AlertDescription>
          </Alert>
        )}
        <ItemForm defaultForm={emptyValues} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}

const EditInventoryItem = ({ item }: { item: Item }) => {
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<string>()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError("")
    setSuccess("")

    const res = await fetch("/api/store", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item._id, ...values }),
    })
    if (!res.ok) setError(await res.text())
    else setSuccess(await res.text())
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Inventory Item</DialogTitle>
          <DialogDescription>
            Update the item description and inventory for this Item.{" "}
            <strong>Click Submit to save changes.</strong>
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {error}
            </AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <CheckCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {success}
            </AlertDescription>
          </Alert>
        )}
        <ItemForm defaultForm={item} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}

const DeleteInventoryItem = ({ item }: { item: Item }) => {
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<string>()

  const onSubmit = async () => {
    setError("")
    setSuccess("")
    const res = await fetch("/api/testimonials", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item._id }),
    })
    if (!res.ok) setError(await res.text())
    else setSuccess(await res.text())
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Testimonial</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this testimonial?{" "}
            <strong>This cannot be undone.</strong>
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {error}
            </AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <CheckCircle className="size-4" />
            <AlertDescription className="font-semibold">
              {success}
            </AlertDescription>
          </Alert>
        )}
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            Confirm Deletion
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const Inventory = () => {
  const [inventory, setInventory] = React.useState<Item[]>([])

  // get the testimonials from the database
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/store")
      const data = await res.json()
      if (res.ok) setInventory(data)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold">Inventory</h2>
      <Table>
        <TableCaption>
          <AddInventoryItem />
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Item</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Inventory</TableHead>
            <TableHead className="w-[200px]">Price</TableHead>
            <TableHead className="w-[200px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((t) => (
            <TableItem key={t.name} item={t} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
