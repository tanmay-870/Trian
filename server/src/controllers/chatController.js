export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body

    res.json({
      success: true,
      userMessage: message,
      aiResponse: "AI response will come here later"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

