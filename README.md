# @code-with-von/fumadocs-template


> [!important]
> If you don't know anything about:
> - Node.js
> - Node.js packages and package managers
> - Markdown
> - React
> - Next.js
>
> It's **strongly advised** that you learn how to work with the tech-stack listed above before you continue!

This repository contains a **Fumadocs template** created by [von Schappler](https://www.github.com/vonschappler) free for use.

The template has a set of features:

- .env (environmental variables) injected via **Infisical**
- analytics tracking using **Posthog**
- addition of plugins and some custom made components

---

## Motivation:

**Documentation** of any project is no simple task (it never was and I don't feel like it'll ever be). This happens because the bigger the project is, more programming languages, features, conventions, **team-base** - and many other things - are just being added to a project.

Depending on the **team communication**, documentation can be done by simply adding commentaries into their code? Maybe the team needs another source of truth with documentation specifications? Maybe each programming language has their own way of adding **documentation snippets**?

We never know what will be the challenge we'll have to deal with when working as a **developer** when it comes to this aspect.

I had (and still have) to deal with the same problems, even after **20 years or working into this area**  - both as a developer trying to communicate to someone with my team or **when trying to provide information** to my customers/consumers about something **I create**.

After a long research, I spent some time doing this kind of communication using **Wiki** (more specifically **Github** Wiki) - until I got stumbled into the point where I had to **expose my whole project** in order for someone to have access to that communication, unless I pay, or not communicate **at all**.

This was then the **day** I heard about **Fumadocs**. I'm not here to say it's **the best** (because this definition is really personal), but I can say that it offers what **I** need, and so, my desire to share this **idea/concept** with other developers that struggle with the same as **I**, can give **it** a try as a possibility of improving their workflow.

---

## What is **Fumadocs**?

- **Short answer**: it's a documentation framework built on top of Next.js and Tailwind CSS.
- **Long answer**: it's what **I** dedicated **countless** hours of work to understand and configure **to my current needs**, in order to provide a better documentation experience for users of my products, when I need to generate something "*close to an **user's guide***".

And now? I am not only sharing that with my users, but with **YOU**, by providing access to the starting codebase I use for any **documentation** project, **at least when working in *solo* projects**.

Point is - **IF** I am working alone, **this will be** the main strategy for documentation (of course, not ignoring other strategies that might be more suitable for other contexts/situations) used in any project.

> [!warning]
>
> Using **Fumadocs** does not refute the fact that, **if working with a team**, other documentation strategies **may** still be needed.
>
> It just means that, **when possible**, all documentation can be generated in a single place, using a single tool and **that will be done using Fumadocs**, when that is possible to be done.

### How does **Fumadocs** work?

As already pointed before, it works on the top of **Next.js** and **Tailwind CSS** in order to provide an intuitive experience and easy access to information to the **end user** (or to the ones we wish to communicate).

Because the way it was built, that means we can, as **developers**:
1. Create our own **reusable** elements/components/plugins, which means no repetition of code, which reduces a lot the maintenance effort, **documentation-wise**
1. Add plugins as we see fit, customize those plugins and use them in our documentation, with the same **level of freedom** any **React developer** has when creating their web applications
1. because this is built on top of **Next.js**, we don't need to use any **3rd party library** to manage navigation - as long as you know how **Next.js Apps router work** - it's just following your usual flow
1. It uses **MDX** inside the documentation files - which means we can use **React components** alongside **Markdown syntax**

---

## Setup the local project:

To setup a development environment to use this template, those are the steps you need to follow[^1].

1. setup pnpm as your package manager
1. clone this repository locally
1. install the needed dependencies
1. boot up the development script

>[!note]
>
> All needed **.env** values are being provided from the **cloud** using **Infisical**. If you don't wish to use **Infisical**, you can still, before booting up the application, proceed by:
> 1. create a copy of the **.env.example** as **.env.local**
> 1. **fill in the values** required with your own values for what the current version of this project needs
> 1. **if some of the features provided with this template does not match your needs**, you should have enough knowledge in order to update the codebase to match your project

---

## Project Dependencies

As you can see in this project **package.json**, any (and all) dependencies are have a **fixed** version.

This was made intentionally as some dependencies (when/if updated) causes lots of conflicts that break the application.

If you want to update them and something breaks out, remember that **no further assistance will be provided in case of changes on the dependencies list used for this project**!

> [!note]
>
> We will keep working into this project and providing updates when possible, but we are not responsible for any issues that **may arise** from updating the dependencies on **your own**.

---

## Project Scripts:

Inside our `package.json` file we provide some scripts to help managing this template. Those scripts are organized into the following groups:

### 1. Depends on a physical .env/.env.local files placed at the root level of the project:
1. **start local dev with `.env.local`**:
    >```shell
    >$ pnpm dev
    >```
1. **build local dev with `.env.local`**:
    >```shell
    >$ pnpm build
    >```
1. **start local build with `.env.local`** (use this just after the project is built using the previous command):
    >```shell
    >$ pnpm start
    >```

### 2. Depends on Infisical setup:

1. **connect the project to your infisical project**:
    >```shell
    >$ pnpm infisical:init
    >```
1. **build local dev with your connected `Infisical` settings**:
    >```shell
    >$ pnpm inf:build
    >```
1. **start local dev your connected `Infisical` settings**:
    >```shell
    >$ pnpm inf:dev
    >```
1. **start local preview your connected `Infisical` settings** (use this just after the project is built using the previous command):
    >```shell
    >$ pnpm inf:start
    >```

### 3. General use:
1. **check types definitions (if needed)**:
    >```shell
    >$ pnpm types:check
    >```
1. **re-runs postinstall scripts (if needed) - use with caution!**:
    >```shell
    >$ pnpm postinstall
    >```
1. **checks for linting errors using biome**:
    >```shell
    >$ pnpm lint
    >```
1. **properly format code using biome**:
    >```shell
    >$ pnpm format
    >```

---

## Submitting an Issues and Other requests for this project

This project has custom forms for each different type of issue we are currently able to work at.

To submit an issue, click on the [here](https://github.com/code-with-von/fumadocs-template/issues/new/choose). That will open our **Issues page** with a set of options for you to choose.

Select the option that suits your needs and follow the instructions based on your selected option.

### Got any questions?

If you have any questions, feel free to submit them to the by selecting the **FAQ** option when creating a new issue, following the steps already indicated above.

> [!note]
> Questions received will be answered and added to this  the [FAQ](#faq) section of this file when possible.

---

## FAQ

Questions and answers will be added here as they are received and answered.

[^1]: The listed steps take under considerations that you have all the required knowledge to perform those steps - no external support will be provided over those, **unless you are a paying customer asking for teaching classes**.

