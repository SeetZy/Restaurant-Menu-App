/*
 * Library imports
 */
import React, { ChangeEvent, useState } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// ? https://www.npmjs.com/package/axios
import axios, { AxiosError } from 'axios'
// ? https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface FormValues {
  [key: string]: any
}

function AddMenuItemsPage() {
  const backendURL = 'http://localhost:5000/add-food'

  const [form, setForm] = useState<FormValues>({})

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setForm((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    axios
      .post(backendURL, form)
      .then(function () {
        toast.success('Pievienots ēdiens', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        // Sis nestrada
        setForm({})
      })
      .catch((err: AxiosError) => {
        if (err.response!.status === 400) {
          toast.warning('Netika pievienots ediens', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        }
      })
  }

  return (
    <section className="h-auto mt-[8%] mb-[8%] w-full flex justify-center">
      <div className="w-[30%]">
        <Form
          className="p-7 border-2 border-orange-500 rounded-md"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="food">
            <div className="text-center text-xl font-bold">
              Pievienot ēdienus ēdienkartei
            </div>
            <div>
              <Form.Label>Ēdiena Nosaukums: </Form.Label>
              <Form.Control
                className="border-2 rounded-sm"
                type="food"
                placeholder="Ēdiena nosaukums"
                name="foodName"
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="food">
            <div>
              <Form.Label>Apraksts: </Form.Label>
              <Form.Control
                className="border-2 rounded-sm"
                type="desc"
                as="textarea"
                placeholder="Apraksts"
                rows={5}
                name="foodDesc"
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-7" controlId="food">
            <div>
              <Form.Label>Cena: </Form.Label>
              <Form.Control
                className="border-2 rounded-sm"
                type="price"
                placeholder="Cena"
                name="foodPrice"
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-7" controlId="food">
            <div>
              <Form.Label>Pievienot attēlu: </Form.Label>
            </div>
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Pievienot ēdienu
          </Button>{' '}
        </Form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default AddMenuItemsPage
