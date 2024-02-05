---
title: 'Fourth Post'
description: 'image-processing'
pubDate: 'Jul 08 2021'
heroImage: '//blog-placeholder-3.jpg'
---

# Image Processing 101

Hi! Check out the work completed by our team as part of our Image Processing course 🙂

## Week 1 -> decisions…decisions

So its week 1, we have just been given the option to form our teams during our lab, I already had a few classmates joining me on this module but for me the decision was already made by the seating arrangement, that’s right! I sat beside two people I was confident would form a perfect superstar team! Our first group choice? You guessed it… What will our project be? hmm. Together we began to spit out ideas such as a word search puzzle solver but sadly it would require a lot more then image processing to identify fonts, letters and other sorts so we gladly abandoned it, next we thought we hit it out of the park with a Sudoku solver…sadly 😦 another failure for the same reasons above. Lastly we though what is achievable? What would be interest to work on and biology sprung to mind and working with cells, we decided not to make a hasty decision! After class a member created a git-Repo for us to commit our code and a Facebook group was created to share our thoughts and ideas

![](https://imageprocessingbypeter.files.wordpress.com/2019/11/suduku.jpg)
![](https://imageprocessingbypeter.files.wordpress.com/2019/11/wordseach.png)
![](https://imageprocessingbypeter.files.wordpress.com/2019/11/amoeba-4-2.jpg)

## Week 2 -> Decision Time

By the time week 2 swung around we decided it was time that we choose the project to start working on, after much debate and input from the module provider we decided biology was the way forward. We decided to push forward as a group working on an idea using cells possibly to separate different types? We determined a simple project. Identify one cell in a picture and we expanded on this to include identifying certain structures within the cell itself such as the nucleus. But what cell to use?

### Research time...

To determine the best cell we researched a number of cell types, from plant cells to animal cells when we came across amoeba. A relatively clear cell type which has a distinct structure such as the nucleus which we could use image processing techniques to determine and label, below are some images of amoeba, in the end it was agreed that we use an electronic version of the amoeba cell rather then a real amoeba cell for the purpose of our project.

![](https://imageprocessingbypeter.files.wordpress.com/2019/11/amoeba-4-1.jpg)
![](https://imageprocessingbypeter.files.wordpress.com/2019/11/amoeba1-1.jpg)
![](https://imageprocessingbypeter.files.wordpress.com/2019/11/amoeba3-1.png)

### Background

The amoeba cell is a unicellular organism, with no fixed shape that can be found in rivers and ponds etc. For movement and capturing food is uses is Pseudopods which are the finger like projections on the outside further information can be found about each structure within an amoeba here

![Amoeba Cell](https://imageprocessingbypeter.files.wordpress.com/2019/11/image-27.png)

### Project Scope

For our project we decided to keep the main objectives simple, take in an image of an amoeba cell; do some image processing on it to determine a cell structure such as the nucleus of the amoeba.

## Week 3 -> Channeling

For us week 3 focused on selecting the proper Color space to base our work off.

### Research time…

There is already a number of inbuilt methods to determine appropriate color spaces such as RGB = cv2.cvtColor(I, cv2.COLOR_BGR2RGB), HSV = cv2.cvtColor(I, cv2.COLOR_BGR2HSV) From here you can determine the best method based on the information you are after in the image and the quality of the image,

![YUV](https://imageprocessingbypeter.files.wordpress.com/2019/11/yuv-1.png)
![V](https://imageprocessingbypeter.files.wordpress.com/2019/11/single.png)
![Gray scale](https://imageprocessingbypeter.files.wordpress.com/2019/11/gray.png)
![HSV Image of the amoeba](https://imageprocessingbypeter.files.wordpress.com/2019/11/hsvamoeba.png?w=472)

When I started working on parts for the project i originally used a gray-scale image as it was simple and worked in tandem to produce a quality result with OTSU’s thresholding. My team mate created a high pass filter taking only the higher frequencies into account leading to very distinct cell shapes… as you can see each structure within the cell is clearly identifiable while filtering out potential noise outside of the cells. He also used the V channel worked a lot better then the gray scale as it filtered out a lot of the smaller structures which we didn’t focus on as well as noise.

![Exaggerated image -> High pass filter on the cell](https://imageprocessingbypeter.files.wordpress.com/2019/11/image.png)
![High pass filter on V](https://imageprocessingbypeter.files.wordpress.com/2019/11/highpass.png)
More about color spaces can be found on this [website](https://www.learnopencv.com/color-spaces-in-opencv-cpp-python/).

## Week 4 -> Thresholding at its finest 😉

This week I focused my attention on thresholding to aid us in determining the Region Of Interest aka ROI.

![python-thresholding-techniques-using-opencv-set-1-simple-thresholding](https://imageprocessingbypeter.files.wordpress.com/2019/11/image-4.png)
![Ostu’s Thresholding code](https://imageprocessingbypeter.files.wordpress.com/2019/11/image-2.png)
![Ostu’s threshold on amoeba cell type](https://imageprocessingbypeter.files.wordpress.com/2019/11/image-3.png?w=1136)
![Canny Edge detection](https://peterswayne.files.wordpress.com/2019/10/edgedetection-1.png?w=1024)

### Research time…

There was a number of methods already build into OpenCv for determining the best threshold of a picture, I tried a variety of these other methods but Otsu’s threshold produced a cleaner Binary image for use in edge detection, this threshold would then be used to determine the boundary later and hopefully some cell features! Further research looked into the possibility of using Canny edge detection for the possibility of determining cell structures within the cell, however due to the makeup of the image itself it produced a poor result 😦

https://www.geeksforgeeks.org/python-thresholding-techniques-using-opencv-set-1-simple-thresholding/

Ostu’s Thresholding code

Ostu’s threshold on amoeba cell type

Canny Edge detection

## Week 5 -> Boundaries?

This week I was determined to get the boundaries of the amoeba, to make thing simple, the region of interest was a cell…yes first we need to find one cell as the image picked contained a few to many with varying contents within each cell..yet the largest cell yielded the best result in terms of us labeling each structure! 😀 since I previously had got the threshold. I also tested it on other images of both digital cells and a real amoeba cell in the center.

Digital cell
Real amoeba Cell
Larger kernel
Digital Amoeba cell
Description

So to detect the boundary we first needed to create an elliptical shape, where we passed the size of the kernel. I choose to use a small kernel as larger kernel’s whited out the middle of the cells eliminating any structure between, but it makes no difference whether we use a larger kernel size of not as both yield the same affect, we then use morphologyEx method to increase the size of the edges.

## Week 6 -> Contouring…no not makeup kind

this week I decided to draw a boundary on the regions of interest based on my previous work, to highlight the edges of the cells, this not only allows us to highlight each cells membrane effectively identifying it

we use an OpenCV method and feed in the boundary we determined already, the first takes in the source image, while the second is the contour retrieval mode and lately the 3rd is the contour approximation method, from here we are given an actual boundary of each cell and their contents, below you can see the result. I’m hoping to use this same method to name the cell membrane at later date

I then proceed to determine the largest cell by sorting them using another OpenCV method

From here we create a rectangle and bind it to the location of the biggest contour which is at 0

this is the result

## Week 7 -> Cropping till the end

Once we had the largest cell identified it was time to focus solely on that. So we started by cropping the image

From the above we can see how as before we get the contours and crop the largest contour from the original image

### Cropped

We then needed to begin to isolate the structures within the cell, such as the nucleus the cell membrane and vacuoles. To do this we first get the threshold of the new cropped image, we then create a mask and use it to detect contours in the image, we then create a new mask but dilate it before we search for the contours

We then take the x and y from the rectangle we drew earlier as a reference point, we then draw a circle around the region of interest which would be the general area of the nucleus , we then labeled the nucleus

## Week 8 -> Finally over

So its the last week of our project and everything has finally come together, we have successfully found the cell membrane, nucleus and the cytoplasm of a cell outlined in the methods below

from methods already used before, it didn’t take long to highlight and label the cell membrane as it was simple just referring back to our contours back when we bound the rectangle around the biggest. then just placed near the cell membrane text the text for cytoplasm was placed as cytoplasm is nearly everywhere in a cell.

How it was done…

So, first you got the contours of the image and gathered the contours in the image using the boundary produced earlier, they were then sorted by size, a method to calculate moments in OpenCv was used and this determined the center point of the contour we were after which was of course the largest, We then used this moments to calculate cX and cY (center). Once determined we were able to write “membrane” onto the image as a label while also labeling the cytoplasm. The last thing to do was to draw the boundary and match the color of the boundary to the color of the membrane text

Conclusion

This was the last method to implement and we were able to conclude our group work, the result from this has allowed us to identify the largest cell, identify the membrane and to identify the nucleus of a cell. this is our resulting output overlayed onto the origional image gray scaled, as you can see we went past the original scope of the project

A look back on what we could’ve changed

From completing our group work assignment I felt there was a number of things lacking. We had eventually expected to move on from this picture and test on other images, but the difference in the digital images led to massively different output. From here we should have originally went with a better source image such as an actual image of an amoeba cell. During the testing phase we did use some real images but the results differed a lot with a lot of variance

Over all I enjoyed working with my team mates to achieve the goal we had set out.

Here the algorithm we used to complete out project

Algorithm:

1. Read in an image of an amoeba cell

2. Get the binary threshold via otsu, after high pass filtering

3. Get the boundary of the image

4. Determine the contours in the image

5. Sort the contours

6. Bind a rectangle around the largest

7. Get the coordinates of the rectangle

8. Crop the image within the rectangle

9. Get the threshold of the cropped image

10. Create a mark and dilate it, return largest contour

11. Draw a circle around the nucleus and label it nucleus

12. Draw the largest contour on the image, label it membrane

13. Crop the image within the rectangle inclusive

14. Grayscale the original

15. Overlays the cropped version with labels over the grayscale
