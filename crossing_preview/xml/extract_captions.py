import json
import re

output = {}

for i in range(1, 35):
  with open(f"crossing_part{i}.xml") as xmlFile:
    matches = [re.findall(r'<img.*?>', line) for line in xmlFile]
    assert len(matches) == 1
    imgMatches = matches[0]
    images = []
    for match in imgMatches:
      newMatch = re.findall(r'<img src="(.*?)".*?caption="(.*?)".*?>', match)
      assert len(newMatch) == 1
      assert len(newMatch[0]) == 2
      images.append({'src': f'/images/part{i}/lg/{newMatch[0][0]}', 'caption': newMatch[0][1]})
    output[str(i)] = images

jsonOutput = json.dumps(output, indent=4)

with open("captions.json", "w") as outputFile:
  outputFile.write(jsonOutput)
