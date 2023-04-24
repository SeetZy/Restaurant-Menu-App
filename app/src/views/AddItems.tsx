/*
 * Library imports
 */
import React, { ChangeEvent, useState, useEffect } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// ? https://www.npmjs.com/package/axios
import axios, { AxiosError } from 'axios'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'
// ? https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface FormValues {
  [key: string]: any
}

function AddMenuItemsPage() {
  document.title = 'PIEVIENOT ĒDIENUS ĒDIENKARTEI // RESTAURANT MENU APP'

  useEffect(() => {
    const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#form',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
  }, [])

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
    <section className="min-h-[50vh] w-full flex justify-center items-center bg-bg-svg bg-cover bg-no-repeat">
      <div className=" mb-[8%] sm:w-[50vw] sm:mt-[8%] md:w-[40vw] lg:w-[30vw] min-[300px]:w-[80vw] min-[300px]:mt-[15%]">
        <Form
          id="form"
          className="m-4 bg-white p-4 rounded-xl shadow"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="food">
            <div className="text-center text-xl font-bold mb-4">
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
                rows={6}
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
                type="number"
                placeholder="Cena €"
                name="foodPrice"
                min={0}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-7" controlId="food">
            <div>
              <Form.Label>Pievienot attēlu: </Form.Label>
              <Form.Control type="file" required />
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
