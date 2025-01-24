# VueSchool Challenge - Alien Message Decoder

## The Story

An alien 👽 visitor has left us an encrypted message: "⟙⟒⟊⟐⥉⟰⟡⟖⟜⥲"

We're trying to decode the alien message, but our system has a bug! When we copy the alien message and paste it into the decoder input, it doesn't translate the message. We need your help to fix the decoder and figure out what they're trying to tell us!

## The Challenge

The `DecoderForm` component uses `v-model` to bind a value to the `MessageDecoder` component. However, the current implementation of `MessageDecoder` and `DecoderInput` does not support two-way data binding, which causes the app to break.

### Your Mission

1. **Have a look at the `DecoderForm` component** to understand how the components are supposed to communicate with each other.
1. **Fix the `MessageDecoder` and `DecoderInput` components** so that they support `v-model`.

### Notes

- You only need to change `MessageDecoder` and `DecoderInput` components to solve the challenge.
- The `DecoderForm` relies on the `v-model` implementation in `MessageDecoder` to keep the decoded message in sync.
- Use the appropriate Vue 3 features to handle two-way binding in components.

### Expected Behavior

- When you paste alien message in the input field, the `MessageDecoder` component will send the updated message back to the `DecoderForm` using `v-model`.
- The `DecodedResult` component will display the updated decoded message.

---

Good luck, Earth's last hope! 🛸✨
