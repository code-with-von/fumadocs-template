# @vonschappler.org.br/chatbot/docs

This repository contains the **Fumadocs** documentation application for the project.

---

## Motivation:

Since I started streaming (an activity I don't perform for a long time, though) I was always looking for ways of making **my streaming workflow**:

1. easy to setup
1. as customizable as it could be
1. able to be shared this concept with other streamers

So with those **key concepts** in mind, after testing out so many tools that already exist around there, I had contact with some important applications that could provide me part of what I desired:

1. [**Streamlabs Chatbot Desktop**](https://streamlabs.com/desktop-chatbot) (formerly AnkhBot) - high power of customization, based on **Python 2.7.13** scripts / add-ons, an my initial inspiration for this project, as I have heavily used that, until the day they stopped updating it
1. [**Streamer.bot**](https://streamer.bot/) - never used it, but have seen some tutorials about it and it provides also high level of customization, using **C#**
1. [**Firebot**](https://firebot.app/) - never used it, but from their documentation, they also provide a high level of customization, with a light-wave ui, made in **Angular**

Those were then, not only inspiration, but also **motivation** to start this project, which starts by writing a proper documentation for my public creations for **StreamlabsChatbot Desktop**.

---

## Requirements / setup:

As this part of the project is just the documentation website, which is hosted in [Vercel](https://vons-chatbot-docs.vercel.app/), this is only a place for adding documentation resources to guide users on how to use the **public** add-ons created by me.

So the requirements listed here, are for development process only, in a way to guide contributors on how to help me in the process of creating the documentation.

1. setup pnpm as your package manager
1. clone this repository locally
1. install the needed dependencies
1. boot up the development script

>[!note]
>
> All needed **.env** values are being provided from the **cloud** using Infisical - but if you are having problems with Infisical, you can still, before booting up the application as development:
> 1. create a copy of the **.env.example** as **.env.local**
> 1. fill in the values with the values provided by the owner of the project (so for that, you'll need to contact [vonSchappler](mailto:dev_vonschappler@outlook.com) to get those)

---

## Scripts

Inside our `package.json` file we provide some scripts to help managing Supabase.

1. **connect project to infisical**:
    >```shell
    >$ pnpm infisical:init
    >```
1. **build local dev with `.env.local`**:
    >```shell
    >$ pnpm build
    >```
1. **start local dev with `.env.local`**:
    >```shell
    >$ pnpm dev
    >```
1. **start local build with `.env.local`**:
    >```shell
    >$ pnpm start
    >```
1. **build local dev with `Infisical`**:
    >```shell
    >$ pnpm inf:build
    >```
1. **start local dev with `Infisical`**:
    >```shell
    >$ pnpm inf:dev
    >```
1. **start local build with `Infisical`**:
    >```shell
    >$ pnpm inf:start
    >```
1. **check types created**:
    >```shell
    >$ pnpm types:check
    >```
1. **re-runs postinstall scripts**:
    >```shell
    >$ pnpm postinstall
    >```
1. **checks for linting errors**:
    >```shell
    >$ pnpm lint
    >```
1. **properly format code**:
    >```shell
    >$ pnpm format
    >```

> [!note]
> For security and automatic synchronization reasons, it's strongly advised that you use `Infisical to manage the environmental variables!
