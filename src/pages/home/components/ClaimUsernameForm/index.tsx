import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from './styles'

const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClainUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClainUsernameForm() {
  const { register, handleSubmit } = useForm<ClainUsernameFormData>()

  async function handleClaimUsername(data: ClainUsernameFormData) {
    console.log(data)
  }
  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Resevar
        <ArrowRight />
      </Button>
    </Form>
  )
}
