from langchain_ollama.llms import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from flask import make_response
from app.blueprints.chatBot.vectors import retriever

model = OllamaLLM(model="llama3.2")

class chatBot():

    def chat_Bot(self, question):  # take question as input

        prompt_template = """
        You are an intelligent chatbot that answers questions about Taha, his website, and his projects.

        Based on the following information snippets: {reviews}

        Respond to the user's question: {question}

        Keep your answer short, relevant, and to the point (1 to 3 sentences max).
        """
        prompt = ChatPromptTemplate.from_template(prompt_template)
        chain = prompt | model

        reviews = retriever.invoke(question)
        result = chain.invoke({"reviews": reviews, "question": question})

        return make_response({"response": f"{result}"}, 200)
