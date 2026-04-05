import wikipediaapi

# Synchronous client
wiki = wikipediaapi.Wikipedia(user_agent='paris2024_website', language='en')

# Asynchronous client
#wiki = wikipediaapi.AsyncWikipedia(user_agent='paris2024_website', language='en')


page_py = wiki_wiki.page('Python_(programming_language)')