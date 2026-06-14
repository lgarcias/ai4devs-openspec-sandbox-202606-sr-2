# OpenSpec Sandox

*Evidencia:*
````
luisgs@koormo:~/projects/openspec-sandbox$ openspec --version
1.4.1
luisgs@koormo:~/projects/openspec-sandbox$ ls -la
total 20
drwxr-xr-x 5 luisgs luisgs 4096 Jun 14 20:16 .
drwxr-xr-x 5 luisgs luisgs 4096 Jun 14 20:00 ..
drwxr-xr-x 4 luisgs luisgs 4096 Jun 14 20:10 .agent
drwxr-xr-x 4 luisgs luisgs 4096 Jun 14 20:16 .claude
drwxr-xr-x 4 luisgs luisgs 4096 Jun 14 20:10 openspec
````

*Observaciones:*
- No hay presencia de un fichero project.md, la constitucion del proyecto
- Se han instalado 5 skills para el workflow, pero hacen referencia a otras skills que no veo instaladas: en .agent/workflows/opsx-propose.md se menciona Use the **AskUserQuestion tool** (open-ended, no preset options)