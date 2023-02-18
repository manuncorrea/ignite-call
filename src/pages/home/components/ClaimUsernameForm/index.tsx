import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FomrAnnotation, Form, FormAnnotationError } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClainUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClainUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClainUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClainUsernameFormData) {
    console.log(data)
  }
  return (
    <>
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

      <FomrAnnotation>
        <Text>
          {errors.username ? (
            <FormAnnotationError>{errors.username.message}</FormAnnotationError>
          ) : (
            'Digite o nome do usuario desejado'
          )}
        </Text>
      </FomrAnnotation>
    </>
  )
}
