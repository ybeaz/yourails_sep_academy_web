export const response01 = [
  '[{"capture": "Introduction", "text": "In New York City, there is a popular park that attracts tourists and contributes significantly to the city\'s economy. However, there are concerns about the cost of living in the area and the impact on local businesses. Additionally, the city\'s parks department is facing budget cuts, which has led to reduced cleaning frequency. The education department is also experiencing cuts, and teachers are suing the city for violating state law. The city\'s public school system has a large budget, but only a portion is spent on classroom instruction. The city\'s tax revenue has increased, raising questions about the legality of these cuts. The budget cuts are challenging because a significant portion of the city\'s funds are allocated to non-negotiable payments, leaving limited areas to cut. Emergency services, such as the police and fire department, are also facing cuts, despite having smaller budgets compared to education. Local rules are changing the way police operate, requiring them to fill out reports for every stop, which can be time-consuming. Critics argue that this additional work may hinder the police\'s ability to address emergencies. Furthermore, the police force is facing a potential shortage due to canceled graduation classes and retiring officers."},\n\n{"capture": "Impact on Education", "text": "The education department is suing the city for illegal cuts to education spending. The city\'s public school system has a large budget, but a significant portion is not allocated to classroom instruction. The lawsuit alleges that the city has violated state law, which restricts education cuts unless overall revenues decline. The city\'s teachers are fighting back against these cuts, as they believe the budget can be reduced in other areas. However, the limited funds may result in cuts to school lunches and classroom materials, directly impacting students."},\n\n{"capture": "Challenges for Emergency Services", "text": "Despite having smaller budgets compared to education, emergency services like the police and fire department are also facing cuts. The police force is already stretched thin, and new rules requiring them to fill out reports for every stop can further strain their resources. Critics argue that this additional paperwork may hinder the police\'s ability to address crime effectively. Additionally, the police force is facing a potential shortage due to canceled graduation classes and retiring officers. This could result in a reduced police presence and fewer opportunities to address crime in the city."}]',
]

export const response02 = `{"capture": "Introduction", "text": "Deep learning has enabled us to build detailed specialized AI models, and we can do that provided we gather enough data, label it, and use that to train and deploy those models. Models like customer service chatbots or fraud detection in banking."},

{"capture": "Foundation Models", "text": "Now, in the past if you wanted to build a new model for your specialization - so, say a model for predictive maintenance in manufacturing - well, you’d need to start again with data selection and curation, labeling, model development, training, and validation. But foundation models are changing that paradigm. So what is a foundation model? A foundation model is a more focused, centralized effort to create a base model. And, through fine tuning, that base foundation model can be adapted to a specialized model. Need an AI model for programming language translation? Well, start with a foundational model and then fine tune it with programming language data. Fine tuning and adapting base foundation models rapidly speeds up AI model development."},

{"capture": "The Workflow to Create an AI Model", "text": "So, how do we do that? Let’s look at the five stages of the workflow to create an AI model. Stage 1 is to prepare the data. Now in this stage we need to train our AI model with the data we're going to use, and we're going to need a lot of data. Potentially petabytes of data across dozens of domains. The data can combine both available open source data and proprietary data. Now this stage performs a series of data processing tasks. Those include categorization which describes what the data is. So which data is English, which is German? Which is Ansible which is Java? That sort of thing. Then the data is also applied with a filtere. So filtering allows us to, for example, apply filters for hate speech, and profanity and abuse, and that sort of thing. Stuff we want to filter out of the system that we don't train the model on it. Other filters may flag copyrighted material, private or sensitive information. Something else we're going to take out is duplicate data as well. So we're going to remove that from there. And then that leaves us with something called a base data pile. So that's really the output of stage one. And this base data pile can be versioned and tagged. And that allows us to say, 'This is what I’m training the AI model on, and here are the filters I used'. It's perfect for governance. Now, Stage 2 is to train the model. And we're going to train the model on those base data piles. So we start this stage by picking the foundational model we want to use. So we will select our model. Now, there are many types of foundation models. There are generative foundation models, encoder-only models, lightweight models, high parameter models. Are you looking to build an AI model to use as a chatbot, or as a classifier? So pick the foundational model that matches your use case, then match the data pile with that model. Next we take the data pile and we tokenize it. Foundation models work with tokens rather than words, and a data pile could result in potentially trillions of tokens. And now we can engage the process of training using all of those tokens. This process can take a long time, depending on the size of the model. Large scale foundation models can take months with many thousands of GPUs. But, once it’s done, the longest and highest computational costs are behind us. Stage 3 is 'validate'. When training is finished we benchmark the model. And this involves running the model and assessing its performance against a set of benchmarks that help define the quality of the model. And then from here we can create a model card that says this is the model I’ve trained and these are the benchmark scores it has achieved. Now up until this point the main persona that has performed these tasks is the data scientist. Now Stage 4 is 'tune', and this is where we bring in the persona of the application developer. This persona does not need to be an AI expert. They engage with the model, generating - for example - prompts that elicit good performance from the model. They can provide additional local data to fine tune the model to improve its performance. And this stage is something that you can do in hours or days - much quicker than building a model from scratch. And now we’re ready for Stage 5, which is to deployment the model. Now this model could run as as service offering deployed to a public cloud. Or we could, alternatively, embed the model into an application that runs much closer to the edge of the network. Either way we can continue to iterate and improve the model over time."},

{"capture": "IBM's Watsonx Platform", "text": "Here at IBM we’ve announced a platform that enables all 5 of the stages of this workflow. And It’s called watsonx and it’s composed of three elements. So we have: watsonx.data, watsonx.governance, and watsonx.ai., and this all built on IBM’s hybrid cloud platform which is Red Hat OpenShift. Now Watsonx.data is a modern data lakehouse and establishes connections with the data repositories that make up the data in Stage 1. Watsonx.governance manages the data cards from Stage 1 and model cards from Stage 3 enabling a collection of fact sheets that ensure a well-governed AI process and lifecycle. And watsonx.ai provides a means for the application developer persona to engage with the model in Stage 4."},

{"capture": "Conclusion", "text": "Overall foundation models are changing the way we build specialized AI models and this 5-stage workflow allows teams to create AI and AI-derived applications with greater sophistication while rapidly speeding up AI model development."}`

export const response03 = [
  '{\n  "questions": [\n    {\n      "designType": "CheckBox",\n      "multi": true,\n      "topic": "Introduction",\n      "capture": "What is the purpose of specialized AI models?",\n      "isActive": true,\n      "options": [\n        {\n          "label": "To perform tasks like customer service chatbots or fraud detection in banking.",\n          "status": true\n        },\n        {\n          "label": "To replace human workers in all industries.",\n          "status": false\n        },\n        {\n          "label": "To create a single AI model that can do everything.",\n          "status": false\n        },\n        {\n          "label": "To entertain people with funny jokes.",\n          "status": false\n        }\n      ]\n    },\n    {\n      "designType": "CheckBox",\n      "multi": true,\n      "topic": "Foundation Models",\n      "capture": "How do foundation models change the AI model development process?",\n      "isActive": true,\n      "options": [\n        {\n          "label": "By providing a base model that can be fine-tuned for specialized tasks.",\n          "status": true\n        },\n        {\n          "label": "By eliminating the need for data selection and curation.",\n          "status": false\n        },\n        {\n          "label": "By making AI model development slower and more complex.",\n          "status": false\n        },\n        {\n          "label": "By requiring more human intervention in the development process.",\n          "status": false\n        }\n      ]\n    },\n    {\n      "designType": "CheckBox",\n      "multi": true,\n      "topic": "The Workflow to Create an AI Model",\n      "capture": "What are the five stages in the workflow to create an AI model?",\n      "isActive": true,\n      "options": [\n        {\n          "label": "Prepare the data, train the model, validate the model, tune the model, and deploy the model.",\n          "status": true\n        },\n        {\n          "label": "Design the model, implement the model, test the model, optimize the model, and maintain the model.",\n          "status": false\n        },\n        {\n          "label": "Collect data, preprocess data, build the model, evaluate the model, and update the model.",\n          "status": false\n        },\n        {\n          "label": "Analyze the problem, design the solution, implement the solution, test the solution, and deploy the solution.",\n          "status": false\n        }\n      ]\n    },\n    {\n      "designType": "CheckBox",\n      "multi": true,\n      "topic": "Watsonx Platform",\n      "capture": "What are the three elements of IBM\'s Watsonx platform?",\n      "isActive": true,\n      "options": [\n        {\n          "label": "Watsonx.data, watsonx.governance, and watsonx.ai.",\n          "status": true\n        },\n        {\n          "label": "Watsonx.training, watsonx.validation, and watsonx.deployment.",\n          "status": false\n        },\n        {\n          "label": "Watsonx.design, watsonx.implementation, and watsonx.optimization.",\n          "status": false\n        },\n        {\n          "label": "Watsonx.collection, watsonx.preprocessing, and watsonx.evaluation.",\n          "status": false\n        }\n      ]\n    },\n    {\n      "designType": "CheckBox",\n      "multi": true,\n      "topic": "Conclusion",\n      "capture": "What is the impact of foundation models on AI model development?",\n      "isActive": true,\n      "options": [\n        {\n          "label": "They allow teams to create AI and AI-derived applications with greater sophistication while rapidly speeding up AI model development.",\n          "status": true\n        },\n        {\n          "label": "They make AI model development more difficult and time-consuming.",\n          "status": false\n        },\n        {\n          "label": "They have no significant impact on AI model development.",\n          "status": false\n        },\n        {\n          "label": "They make AI model development more expensive and less accessible.",\n          "status": false\n        }\n      ]\n    }\n  ]\n}',
]

export const response04 = `{"capture": "Climate Change Concerns", "text": "I want to start off with talking to you about three things that keep me up at night, right? Three things: the first, and it may be, you know, very common for you too, is climate change. Climate change absolutely keeps me up at night."}

  {"capture": "Impact of Artificial Intelligence", "text": "The second thing that keeps me up at night is that people may have no idea that an artificial intelligence is making a decision that directly impacts their lives - what percentage interest rate you get on your loan, whether you get that job that you applied for, whether your kid gets into that college that they really want to go to. Today AI is making decisions that directly impact you."}
  
  {"capture": "Conclusion and Call to Action", "text": "If you like this video and series, please comment below stay tuned for more videos that are part of this series and to get updates please like and subscribe."}`

export const response05 =
  '```json\
  [\
    {\
      "designType": "CheckBox",\
      "multi": true,\
      "topic": "Introduction to ASM",\
      "capture": "What is ASM in the context of cybersecurity?",\
      "isActive": true,\
      "options": [\
        {\
          "label": "ASM stands for Attack Surface Management.",\
          "status": true\
        },\
        {\
          "label": "ASM is a relatively new entrant in the cybersecurity defensive arsenal.",\
          "status": true\
        },\
        {\
          "label": "ASM is a type of malware used by attackers.",\
          "status": false\
        },\
        {\
          "label": "ASM refers to Automated Security Monitoring.",\
          "status": false\
        }\
      ]\
    },\
    {\
      "designType": "CheckBox",\
      "multi": true,\
      "topic": "Understanding Attack Surface",\
      "capture": "What constitutes an organization\'s attack surface?",\
      "isActive": true,\
      "options": [\
        {\
          "label": "A log-in web form vulnerable to brute force attacks.",\
          "status": true\
        },\
        {\
          "label": "A misconfigured cloud bucket open to public access.",\
          "status": true\
        },\
        {\
          "label": "An updated Java application with no known vulnerabilities.",\
          "status": false\
        },\
        {\
          "label": "A fully decommissioned server with no active connections.",\
          "status": false\
        }\
      ]\
    },\
    {\
      "designType": "CheckBox",\
      "multi": true,\
      "topic": "Attack Surface Management",\
      "capture": "How might an attacker approach understanding an organization\'s attack surface?",\
      "isActive": true,\
      "options": [\
        {\
          "label": "By using an open source tool like Kali Linux to crawl a company\'s online presence.",\
          "status": true\
        },\
        {\
          "label": "By attempting to understand what software is running that may be out of date.",\
          "status": true\
        },\
        {\
          "label": "By physically breaking into the company\'s main office.",\
          "status": false\
        },\
        {\
          "label": "By only targeting the company\'s social media accounts.",\
          "status": false\
        }\
      ]\
    },\
    {\
      "designType": "CheckBox",\
      "multi": true,\
      "topic": "Defending with ASM",\
      "capture": "What is the defensive use of Attack Surface Management?",\
      "isActive": true,\
      "options": [\
        {\
          "label": "Businesses deploy ASM solutions to take an outside-in view on their security posture.",\
          "status": true\
        },\
        {\
          "label": "ASM solutions are used to train company staff on cybersecurity awareness.",\
          "status": false\
        },\
        {\
          "label": "ASM is primarily used for data recovery and backup.",\
          "status": false\
        },\
        {\
          "label": "ASM solutions physically protect the company\'s hardware.",\
          "status": false\
        }\
      ]\
    }\
  ]\
  ```'
