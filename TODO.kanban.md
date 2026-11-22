<!-- This is a Kanban Board file created with MD Kanban extension -->
<!-- GitHub: https://github.com/jebakumarj/md-kanban -->
<!-- VS Code Extension: Search "MD Kanban" in the extension store (ID: jeddak.md-kanban) -->

# @code-with-von/fumadocs-template/TODO

## Planned

#### Add a web-preview component/feature
Start date: N/A
End date: N/A

---

Providing a interactive preview of the expected result will provide a better user experience, so the user does not need to keep going back and forth between the documentation and the expected result.

---
<!-- id: task-1794048753967-2 -->
Tags: `improvements`
<!-- priority: medium -->
<!-- assignee: vonschappler -->

#### Add Excalidraw support to the template
Start date: N/A
End date: N/A

---

Excalidraw is a great tool for creating diagrams, and it would be nice to have support for rendering Excalidraw diagrams as part of the plugins/components we can use in for documentation.

---
<!-- id: task-1794048753967-3 -->
Tags: `improvements`
<!-- priority: medium -->
<!-- assignee: vonschappler -->

## Blocked

## In Progress

### Support to Mobile screens

#### Fix support to mobile views
<!-- id: task-1794048753967-1 -->
Start date: 2026-11-07
End date: N/A

---

When testing responsiveness, some mobile views break the layout, in certain breakpoints which are not default to either Tailwind CSS or Fumadocs

---

- [x] Test mobile views
- [ ] Configure correct breakpoints
- [ ] Fix CSS definitions to support mobile views where needed

Tags: `improvements`
<!-- priority: low -->
<!-- assignee: vonschappler -->

## Done

### Review r@1.0.0

#### Create Review r@1.0.0 codebase
<!-- id: task-1794048753967-0 -->
Start date: 2026-11-06
End date: 2026-11-22

---

Publish codebase for review r@1.0.0 of the current project

---

- [x] Consolidate repository structure
- [x] Create github issue templates
- [x] Add github actions
- [x] Add initial codebase for the project
- [x] Add/Update repository documentation files (Changelog, FileTree, README.md, TODO.kanban.md)
- [x] Add repository Licensing files
Tags: `r@1.0.0`
<!-- priority: high -->
<!-- workload: hard -->
<!-- assignee: vonschappler -->

#### Deploy Review r@1.0.0
<!-- id: task-1794048753967-1 -->
Start date: 2026-11-06
End date: 2026-11-22

---

Deploy review r@1.0.0 of the current project

---

- [x] Build and test the application locally using ".env.local"
- [x] Build and test the application locally using "Infisical"
- [x] Create the deployment configuration on Vercel
- [x] Connect the deployment configuration to "Infisical"
- [x] Deploy to Vercel
- [x] Test the deployment


Tags: `r@1.0.0`
<!-- priority: high -->
<!-- assignee: vonschappler -->

#### Update project to r@1.1.0
<!-- id: task-1794048753967-1 -->
Start date: 2026-11-22
End date: 2026-11-22

---

Update codebase to ensure different environments are used for:
- development / testing
- final production

---

- [x] Add needed code to ensure different environments work properly based on the flow of the project

Tags: `r@1.1.0`
<!-- priority: high -->
<!-- assignee: vonschappler -->
